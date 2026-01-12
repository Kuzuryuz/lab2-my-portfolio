import { create } from 'zustand';

export const useCartStore = create((set) => ({
    cart: [],

    // ฟังก์ชันเพิ่มสินค้า
    addToCart: (product) =>
        set((state) => {
            const existingItem = state.cart.find((item) => item.id === product.id);

            if (existingItem) {
                // ถ้ามีอยู่แล้ว ให้เพิ่มแค่ quantity
                return {
                    cart: state.cart.map((item) =>
                        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                };
            }

            // ถ้ายังไม่มี ให้เพิ่มเข้าไปใหม่พร้อมตั้งค่า quantity เป็น 1
            return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }),

    // ฟังก์ชันลบสินค้า
    removeFromCart: (productId) =>
        set((state) => ({ cart: state.cart.filter((item) => item.id !== productId) })),

    // ฟังก์ชันล้างตะกร้า
    clearCart: () => set({ cart: [] }),
    // เพิ่ม / ลด จำนวนสินค้า
    increaseQuantity: (productId) =>
        set((state) => ({
            cart: state.cart.map((item) =>
                item.id === productId ? { ...item, quantity: (item.quantity || 1) + 1 } : item
            ),
        })),
    decreaseQuantity: (productId) =>
        set((state) => {
            const next = state.cart
                .map((item) =>
                    item.id === productId ? { ...item, quantity: (item.quantity || 1) - 1 } : item
                )
                .filter((item) => item.quantity > 0);

            return { cart: next };
        }),
}));
