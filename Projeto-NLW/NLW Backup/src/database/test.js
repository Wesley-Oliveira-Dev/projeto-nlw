const Database = require('./db.js')
const  createProffy = require('./createProffy.js')

Database.then(async (db) => {
    //inserir dados

    proffyValue = {
        name: "Wesley Oliveira", 
        avatar: "https://scontent-gru1-1.xx.fbcdn.net/v/t1.0-9/30629611_612055109130547_8835154156233557628_n.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_eui2=AeFfQAM6T5u3TnLcEphWdoEqQ9Jw1a4NnxpD0nDVrg2fGnm9_fZNt5paCE5zThSqwWc5EXxRUVbADgWuoJxRDUeE&_nc_ohc=sMRkTYCkN9kAX-R_ox4&_nc_ht=scontent-gru1-1.xx&oh=080a62e45dba71a8d7cddb59f1326afa&oe=5F538DF2", 
        whatsapp: 991043257, 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    }

    classValue = {
        subject: 8, 
        cost: "50",
        // o proffy ID virá pelo o BD
    }

    classScheduleValues = [
        //class_id virá pelo o BD após cadastrarmos a class
        {
            weekday: 0,
            time_from: 720,
            time_to: 1220   
        },
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220   
        }
    ]

    await createProffy (db, {proffyValue, classValue, classScheduleValues})

    //consultar dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    //Consultar as classes de um determinado professor e trazer juntos os dados do professor.
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    //o horário que a pessoa trabalha, por exemplo é das 8h - 18h
    //o horário do time_from (8h) precisa ser menor ou igual ao horário solicitado
    // o time_to precisa ser acima de 18h.
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "800"
        AND class_schedule.time_to > "1220"
    `)

    // console.log(selectClassesSchedules)
    
})