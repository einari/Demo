// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ContextualMenuItemType, Dialog, DialogFooter, DialogType, IconButton, IContextualMenuProps, IPersonaSharedProps, Persona, PersonaPresence, PersonaSize, PrimaryButton } from '@fluentui/react';
import { useId, useBoolean } from '@fluentui/react-hooks';
import * as React from 'react';

import { default as styles } from './AppHeader.module.scss';

const dialogStyles = { main: { maxWidth: 450 } };
const examplePersona: IPersonaSharedProps = {
    imageUrl: 'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png',
    imageInitials: 'AL',
    text: 'Annie Lindqvist',
    secondaryText: 'Software Engineer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
};

const dialogContentProps = {
    type: DialogType.normal,
    title: 'Software Version',
    closeButtonAriaLabel: 'Close',
    subText: 'Version: 1.0.0'
};


export const AppHeader = () => {
    const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
    const labelId: string = useId('dialogLabel');
    const subTextId: string = useId('subTextLabel');

    const menuProps = {
        shouldFocusOnMount: true,
        items: [
            { key: 'settings', text: 'Settings', iconProps: { iconName: 'Settings' } },
            { key: 'profile', text: 'Profile', iconProps: { iconName: 'Contact' } },
            { key: 'divider', itemType: ContextualMenuItemType.Divider },
            { key: 'versions', text: 'Versions', iconProps: { iconName: 'Info' }, onClick: toggleHideDialog },
        ]
    } as IContextualMenuProps;

    const modalProps = React.useMemo(
        () => ({
            titleAriaId: labelId,
            subtitleAriaId: subTextId,
            isBlocking: false,
            styles: dialogStyles,
        }),
        [labelId, subTextId],
    );

    return (
        <header className={styles.appHeader}>
            <a href="/" className={styles.siteLogo}>
                MyApp
            </a>
            <div className={styles.menu}>
                <Persona {...examplePersona}
                    size={PersonaSize.size32}
                    presence={PersonaPresence.offline}
                    hidePersonaDetails></Persona>

                <IconButton className={styles.moreButton} iconProps={{ iconName: 'More' }}
                    menuProps={menuProps}
                />

                <Dialog
                    hidden={hideDialog}
                    onDismiss={toggleHideDialog}
                    dialogContentProps={dialogContentProps}
                    modalProps={modalProps} >
                    <DialogFooter>
                        <PrimaryButton onClick={toggleHideDialog} text="Ok" />
                    </DialogFooter>
                </Dialog>

            </div>

        </header>
    );
};
