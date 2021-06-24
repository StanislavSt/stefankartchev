
import dynamic from "next/dynamic";

const MyNotSsrComponent = dynamic(
  () => import('../components/Luxus'),
  { ssr: false }
)

export default function MyPage() {
  return <MyNotSsrComponent />
}