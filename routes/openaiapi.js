const openai = require('openai')

openai.apiKey = process.env.OPENAI_API_KEY

const conversation = await openai.conversations.create({})

const conversationId = conversation.id

const response = await openai.conversations.message({
    conversationId: conversationId,
    message: '你是谁'
})

console.log(response)