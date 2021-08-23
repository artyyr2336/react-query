import { useQuery } from "react-query"
import { fetchTodos } from "../api"

export const QueryComponent = () => {
	const { data, isLoading, isError, error } = useQuery("todos", fetchTodos)

	if (isError) {
		return <div>Ошибка {error}</div>
	}

	if (isLoading) {
		return <div>Загрузка..</div>
	}

	return (
		<ul>
			{data?.records?.map(rec => {
				return (
					<li>
						<li key={rec.id}>{rec.fields.text}</li>
					</li>
				)
			})}
		</ul>
	)
}
