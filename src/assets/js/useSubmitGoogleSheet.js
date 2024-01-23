import { useEffect } from 'react';

function useSubmitGoogleSheet () {
    useEffect(() => {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwHEK6y9AmSg7149c4LnqNfQxHGq-HVLiY88YrkKPsHY-UJ5RIB3cWkrRVej0IV6bE/exec'
        const form = document.forms['submit-to-google-sheet']
        
        form.addEventListener('submit', e => {
            console.log(999)
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => console.log('Success!', response))
                .catch(error => console.error('Error!', error.message))
        })
    }, []);
}

export default useSubmitGoogleSheet ;