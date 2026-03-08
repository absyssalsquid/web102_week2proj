const Card = (props) => {
    // console.log(props.rectoImage);

    return (
        <div className='Card'>
            <div className='recto'>
                {props.rectoImage && <img src={props.rectoImage} alt="" />}
            </div>
            <div className={'verso ' + (props.colorCode ? props.colorCode : null )}>
                <table className='text'>
                    {props.commonName    && 
                        <tr >
                            <th>Common name</th>
                            <td>{props.commonName}</td>
                        </tr>
                    }
                    {props.scientificName  && 
                        <tr>
                            <th>Scientific name</th>
                            <td><i>{props.scientificName}</i></td>
                        </tr>
                    }
                    {props.edibility     && 
                        <tr>
                            <th>Edibility </th>
                            <td>{props.edibility}</td>
                        </tr>
                    }
                </table>
            </div>
        </div>
    )
}

export default Card;