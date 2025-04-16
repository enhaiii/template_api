const { createClient } = require('@supabase/supabase-js')

// Create a single supabase client for interacting with your database
const supabase = createClient('https://pvaqxohqaleoinlvpzud.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2YXF4b2hxYWxlb2lubHZwenVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3ODA5OTMsImV4cCI6MjA2MDM1Njk5M30.N9D_Z4QGndAFsw8z2VSEMGkguz8RfCFy1G0H6mpI5lw')


const express = require('express')
const app = express()
const port = 3000

app.get('/students', async (req, res) => {
  const { data, error } = await supabase
   .from('students')
   .select()

  res.json(data)
})

app.post('/students', (req, res) => {
  res.send('Добавление студента')
})

app.put('/students', (req, res) => {
  res.send('Изменение студента')
})

app.delete('/students/:id', async (req, res) => {
  const response = await supabase
  .from('students')
  .delete()
  .eq('id', req.params.id)

  res.json('Студент с id=' + req.params.id + ' удален!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})