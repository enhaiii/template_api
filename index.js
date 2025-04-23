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

app.post('/students', async (req, res) => {
  const { error } = await supabase
  .from('students')
  .insert({ "id": 4, "full_name": 'Курзенкова Даниэла Джафарович', "birthday": '2006-06-16', "group": 'ИС 24/11', "gender": 'ж', "phone_number": '+7 (934) 382-76-76' })

  res.send('Добавление студента')
})

app.put('/students/:id', async (req, res) => {
  const response = await supabase
  .from('students')
  .update({ full_name: 'Роткова Татьяна Дмитриевна' })
  .eq('id', req.params.id)

  res.send('Студент c id=' + req.params.id + ' изменен!')
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