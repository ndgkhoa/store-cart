import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import validator from "validator"
import { z } from "zod"
import { useState } from "react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCartStore } from "@/state/cart-store"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import isValidArray from "../../../../utils/isValidArray"
import base from "../../../../utils/airtable"

const checkoutFormSchema = z.object({
    name: z.string().min(2, { message: 'Ít nhất 2 kí tự' }),
    email: z.optional(z.string().email('Email không hợp lệ')).or(z.literal('')),
    phone: z.string().refine((phone) => {
        return validator.isMobilePhone(phone, 'vi-VN')
    }, {
        message: 'Số điện thoại không hợp lệ'
    }),
    address: z.string().min(10, { message: 'Ít nhất 10 kí tự' }),
})

const DialogCheckout = (props: {
    open: boolean
    onOpenChange: (open: boolean) => void
}) => {

    const [loading, setLoading] = useState(false)
    const cartStore = useCartStore()
    const { toast } = useToast()
    const router = useRouter()
    const form = useForm<z.infer<typeof checkoutFormSchema>>({
        resolver: zodResolver(checkoutFormSchema)
    })
    const onSubmit = async (values: z.infer<typeof checkoutFormSchema>) => {
        setLoading(true)
        try {
            const request = await base('orders').create([
                {
                    fields: {
                        name: values.name,
                        phone: values.phone,
                        email: values.email,
                        address: values.address,
                    }
                }
            ])

            if (isValidArray(request)) {
                const orderId = request[0].id
                const records = cartStore.list.map((item) => {
                    return {
                        fields: {
                            price: item.product_variant.variant_price,
                            quantity: item.quantity,
                            product_variant: [item.variant_id],
                            order: [orderId]
                        }
                    }
                })
                const orderItems = await base('orders-products').create(records)
                if (isValidArray(orderItems)) {
                    toast({
                        title: '✅ Đơn hàng đã được tạo thành công'
                    })
                    cartStore.addSuccessList()
                    cartStore.reset()
                    router.push('/cart/order-success')
                }
            } else {
                new Error('Đã có lỗi, tạo đơn không thành công')
            }

        } catch (error) {
            console.log(error);

        }
        setLoading(false)
    }

    return (
        <Dialog
            open={props.open}
            onOpenChange={(open) => props.onOpenChange(open)}
        >
            <DialogContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <DialogHeader>
                            <DialogTitle className="mb-8">
                                Thông tin đơn hàng
                            </DialogTitle>
                            <div className="space-y-3">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Tên người nhận</FormLabel>
                                            <FormControl>
                                                <Input disabled={loading} required placeholder="Người nhận..." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input type="email" disabled={loading} placeholder="Email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Số điện thoại</FormLabel>
                                            <FormControl>
                                                <Input disabled={loading} required placeholder="Số điện thoại" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Địa chỉ</FormLabel>
                                            <FormControl>
                                                <Input disabled={loading} required placeholder="Địa chỉ" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </DialogHeader>
                        <DialogFooter className="mt-8">
                            <Button type="submit">Xác nhận</Button>
                            <Button type="submit" variant={'outline'} onClick={() => { props.onOpenChange(false) }}>Hủy</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
export default DialogCheckout
