import Total from './Components/Total';
import Header from "./Components/Header";
import Content from "./Components/Content";

const App = () => {
    const course = {
        name: 'Half stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props o pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )
};

export default App;