'use client'
const HomePage = (props: {
    data: any
}) => {
    console.log(JSON.parse(props.data));

    return (
        <>
            home
        </>
    )
}
export default HomePage
