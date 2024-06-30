import { useParams } from 'react-router-dom';
import moment from 'moment';

export default function Detail() {
    const { id } = useParams();
    const date = moment(id, 'YYYYMMDD').format('YYYY-MM-DD');
    return (
        <div>
            {date}
        </div>
    )   
}