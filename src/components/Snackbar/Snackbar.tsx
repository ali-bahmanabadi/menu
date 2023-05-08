import * as React from 'react';
import Button from '@mui/material/Button';
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';

export function MyApp() {
    const { enqueueSnackbar } = useSnackbar();

    const handleClick = () => {
        enqueueSnackbar('I love snacks.');
    };

    const handleClickVariant = (variant: VariantType) => () => {
        // variant could be success, error, warning, info, or default
        enqueueSnackbar('This is a success message!', { variant });
    };

    return (
        <React.Fragment>
            <Button onClick={handleClick}>Show snackbar</Button>
            <Button onClick={handleClickVariant('success')}>
                Show success snackbar
            </Button>
        </React.Fragment>
    );
}

const IntegrationNotistack: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return <SnackbarProvider maxSnack={3}>{children}</SnackbarProvider>;
};

export default IntegrationNotistack;
