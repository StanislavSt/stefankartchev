
import dynamic from "next/dynamic";

const MyNotSsrComponent = dynamic(
  () => import('../components/Miscible'),
  { ssr: false }
)

export default function MyPage() {
  return <MyNotSsrComponent />
}