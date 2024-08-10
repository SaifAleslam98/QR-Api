// Routes
const indexRouter = require('../routes/index');
const facultyRouter = require('../routes/faculty');
const subjectRouter = require('../routes/subject');
const studentRouter = require('../routes/student');
const attendanceRouter = require('../routes/attendance');

//Use Routers
const routerHandler = (app) => {
    app.use('/', indexRouter);
    app.use('/faculty', facultyRouter);
    app.use('/subject', subjectRouter);
    app.use('/student', studentRouter);
    app.use('/attendance', attendanceRouter);
}
module.exports = routerHandler;