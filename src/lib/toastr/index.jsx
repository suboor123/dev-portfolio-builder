import { Notification, toaster } from 'rsuite';

/**
 * Toastr library to display message in the notification
 */

export const toastr = {
    success(heading, content) {
        execToastr(heading, content, 'success');
    },

    error(heading, content) {
        execToastr(heading, content, 'error');
    },

    warning(heading, content) {
        execToastr(heading, content, 'warning');
    },

    info(heading, content) {
        execToastr(heading, content, 'info');
    },
};

const execToastr = (heading, content, type = 'success') => {
    toaster.push(
        <Notification
            header={heading}
            placement="topStart"
            closable
            type={type}
        >
            {content}
        </Notification>,
        {
            placement: 'topEnd',
        }
    );
};
