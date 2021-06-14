import Link from 'next/link'

export default function Home() {
	return (
		<div>
			<h1>Домашняя страница</h1>
			<Link href="/regForm"><a>Ввод данных</a></Link>
		</div>
	)
}
