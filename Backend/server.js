const express=require('express');
const dotenv=require('dotenv');
const connectDB=require('./db/db');
const {notFound,errorHandler}=require('./middlewares/errorMiddleware');
const cors=require('cors');

dotenv.config();
connectDB();

const app=express();
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}));
app.use(express.json());

app.use('/api/auth',require('./routes/authRoutes'));
app.use('/api/expenses',require('./routes/expenseRoutes'));
app.use('/api/user',require('./routes/userRoutes'));

app.use(notFound);
app.use(errorHandler);

app.listen(3002 || process.env.PORT,()=>{
    console.log(`Server running at port ${3002 || process.env.PORT}`);
})