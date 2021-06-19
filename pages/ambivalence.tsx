
import dynamic from "next/dynamic";

const MyNotSsrComponent = dynamic(
  () => import('../components/Ambivalence'),
  { ssr: false }
)

export default function MyPage() {
  return <MyNotSsrComponent />
}