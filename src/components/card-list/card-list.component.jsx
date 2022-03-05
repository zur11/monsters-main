import  Card  from '../card/card.component';
import './card-list.styles.css';

//* Functional Component - Implicit return

const CardList = ({ monsters }) => ( //* Props: Distructure inside param
    <div className='card-list'>
        {monsters.map( monster => (
            <Card monster={monster}/>
        ))}
    </div>
);

export default CardList;