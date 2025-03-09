export default function DynamicRoute({params}){
    return <main>
        <h1>DynamicRoute</h1>
        <p>{params.slug}</p>
    </main>
}