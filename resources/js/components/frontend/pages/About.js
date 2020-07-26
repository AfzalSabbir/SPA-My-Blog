import React from 'react';
import ReactDOM from 'react-dom';

let Component = React.Component;

class About extends Component {
    constructor(props) {
        console.log(props);
        super(props)
        this.state = {}
    }
    componentDidMount(){
        document.title = 'About - My Blog';
    }
    render(){
    return (
        <div className="container py-2">
            <h1>
                About Us
            </h1>
            <hr />
            <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque tempora autem, iure in facilis quis, sint minus, hic nobis totam laboriosam rem molestiae modi nemo quae dolore consequuntur neque vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quod mollitia pariatur perspiciatis dicta. Iusto a mollitia tenetur laboriosam ut, dignissimos deserunt, amet dolorem accusamus, veniam, natus dolorum hic at. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus id nisi, tenetur doloremque facilis dolorum iure, quibusdam itaque nobis, cum nulla quos. Sunt atque inventore nobis expedita iusto sapiente officiis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quis, quidem excepturi non consectetur! Necessitatibus at cum veritatis perferendis, doloremque atque. Cum sint dicta aperiam, sunt temporibus labore tempora dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi iusto, dolorem ea provident eligendi aspernatur culpa, ut numquam minus praesentium recusandae incidunt rerum, non nulla sunt ullam. Impedit minima, aliquam.
            </p>
            <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque tempora autem, iure in facilis quis, sint minus, hic nobis totam laboriosam rem molestiae modi nemo quae dolore consequuntur neque vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nobis labore ullam nihil molestias, quasi rerum in! Harum voluptate qui, obcaecati, deleniti iure sunt sit error aliquam atque, itaque veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, ea! Incidunt placeat saepe laborum, dignissimos mollitia ab, quam ipsum aliquam est doloribus cumque quod dolorem voluptate doloremque accusantium, magni, modi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime illum ipsam dolorum debitis recusandae quia error distinctio eius eaque consequuntur, aperiam odit rerum eum reprehenderit eos. Dolorum velit similique ipsa.
            </p>
        </div>
    );
    }
}

export default About;

if (document.getElementById('about')) {
    ReactDOM.render(<About />, document.getElementById('about'));
}
