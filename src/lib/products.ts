export type Product = {
    id: string
    name: string
    price: number
    description: string
    image: string
}

const initialProducts: Product[] = [
    {
        id: "p001",
        name: "Essence Mascara Lash Princess",
        price: 9.99,
        description:
            "มาสคาร่า ช่วยเพิ่มความหนาและความยาวให้ขนตา",
        image:
            "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
    },

    {
        id: "p002",
        name: "Eyeshadow Palette with Mirror",
        price: 19.99,
        description:
            "พาเลทอายแชโดว์พร้อมกระจก มีเฉดสีหลากหลายสำหรับแต่งตา",
        image:
            "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
    },

    {
        id: "p003",
        name: "Powder Canister",
        price: 14.99,
        description:
            "แป้งฝุ่นเนื้อละเอียดสำหรับเซตผิวและควบคุมความมัน",
        image:
            "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp",
    },
]

declare global {
    // eslint-disable-next-line no-var
    var demoProducts: Product[] | undefined
}

const products =
    globalThis.demoProducts ??
    structuredClone(initialProducts)

if (process.env.NODE_ENV !== "production") {
    globalThis.demoProducts = products
}

export function getProducts() {
    return products
}

export function getProduct(id: string) {
    return products.find((product) => product.id === id)
}

export function updateProduct(
    id: string,
    values: Pick<Product, "name" | "price" | "description">,
) {
    const product = getProduct(id)

    if (!product) {
        throw new Error("Product not found")
    }

    product.name = values.name
    product.price = values.price
    product.description = values.description
}

export function deleteProduct(id: string) {
    const index = products.findIndex(
        (product) => product.id === id
    )

    if (index === -1) {
        throw new Error("Product not found")
    }

    products.splice(index, 1)
}