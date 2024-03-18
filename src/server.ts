import * as dotenv from 'dotenv'
import app from '.'

dotenv.config()

const PORT = process.env.PORT || 3000
app.listen(PORT, async () => {
    console.log(`listning on port ${PORT}`)
})
