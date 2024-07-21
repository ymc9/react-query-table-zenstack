import { OrderDetails } from '@/components/orders';

export default function Home() {
    return (
        <main className="flex h-screen flex-col items-center justify-between p-24">
            <OrderDetails />
        </main>
    );
}
