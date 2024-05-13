import Airtable from "airtable";

Airtable.configure({
    apiKey: process.env.NEXT_PUBLIC_AIRTABLE_ACCESS_TOKEN
})

const base = Airtable.base('app4dfI6HG1aboAaQ')

export default base
