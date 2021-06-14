import Head from 'next/head'
import Link from 'next/link'
import Input from '../../components/input'

export default function About() {
	return (
		<div>
			<Head>
				<title>Форма регистрации</title>
			</Head>
			<h1>Введите данные</h1>
			<form method="POST" action="/add">
				<Input
					name="name"
					id="name"
				/>
				<Input
					name="surname"
					id="surname"
				/>
				<Input
					name="age"
					id="age"
				/>
				<button type="submit">Отправить данные</button>
			</form>
			<Link href="/"><a>На главную</a></Link>
		</div>
	)
}
