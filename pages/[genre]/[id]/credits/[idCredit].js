import React, {useRef} from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../../redux/actions/index';
import CreditInfo from '../../../../components/CreditInfo';

export async function getServerSideProps(context) {
    const id = context.query.idCredit;
    return {
      props: {
        id
      }
    }
};

function CreditDetails({id}) {
    let dispatch = useDispatch();
    let details = useRef();
    let images = useRef();
    const credits = useSelector(state => state.creditsReducer);
    
    useEffect(() => {
        dispatch(actions.getCreditDetailsRequest(id));
    }, [credits.details.id]);// eslint-disable-line react-hooks/exhaustive-deps
    details = credits.details;

    useEffect(() => {
        dispatch(actions.getCreditDetailsImagesRequest(id));
    }, [credits.images.id]);// eslint-disable-line react-hooks/exhaustive-deps
    images = credits.images.profiles;
    
    return (
        <div>
            <CreditInfo details={details} images={images} />
        </div>
    )
}

export default CreditDetails;
