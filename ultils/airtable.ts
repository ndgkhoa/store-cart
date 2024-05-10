import Airtable from "airtable";

Airtable.configure({
    apiKey: process.env.AIRTABLE_ACCESS_TOKEN
})

const base = Airtable.base('app4dfI6HG1aboAaQ')

export default base
