import { useState } from 'react'

export default function App() {
  const [n, setN] = useState(0)
  return (
    <main className="wrap">
      <h1>REA</h1>
      <p className="sub">GitHub Pages 自动部署已就绪</p>
      <button onClick={() => setN(n + 1)}>点我 {n}</button>
      <p className="tip">改完代码 git push，Actions 会重新构建并发布。</p>
    </main>
  )
}
