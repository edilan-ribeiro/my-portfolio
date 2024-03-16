interface processResponse {
    response: Response
    setFormSent:  (state: boolean) => void
}

export async function processApiResponse({response, setFormSent}: processResponse): Promise<void> {
    if (response.status === 422) {
        throw new Error('Incorrect data format');
    }

    const sendMailResult = await response.json();

    if (sendMailResult.data.error === null) {
        setFormSent(true);
    } else {
        console.error(sendMailResult.data.error);
        setFormSent(false);
    }
}
