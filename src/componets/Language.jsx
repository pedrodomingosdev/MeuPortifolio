import React from 'react';
import starIcon from '../imagens/star.png';

const Language = () => {
    return (
        <div>
            <div class="container">
                <h2 id="idiomas">Idiomas</h2>
                   <table>
                    <tr>
                        <th>Idioma</th>
                        <th>Fluência</th>
                    </tr>
                    <tr>
                        <td>Português</td>
                        <td>{renderStars(5)}</td>
                    </tr>
                    <tr>
                        <td>Inglês</td>
                        <td>{renderStars(3)}</td>
                    </tr>
                   </table>
            </div>
        </div>
    );
};

const renderStars = (fluency) => {
    const stars = [];
    for (let i = 0; i < fluency; i++) {
        stars.push(<img key={i} src={starIcon} alt="Star" style={{ width: '20px', height: '20px' }} />);
    }
    return stars;
};

export default Language;