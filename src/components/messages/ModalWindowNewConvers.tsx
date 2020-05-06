import * as React from 'react';
import Modal, {ICustomModalStyle} from '@bdenzer/react-modal';

interface IState {
    isOpen: boolean;
}

export class ModalWindowNewConvers extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    public render(): JSX.Element {
        const {children} = this.props;
        const modalStyle: ICustomModalStyle = {
            animationTime: 400,
            closeButtonText: {
                color: '#ffffff'
            },
            hoveredButtonText: {
                fontWeight: 'bold'
            },
            modalHeader: {
                backgroundColor: '#268ef8'
            },
            modalTitle: {
                color: '#ffffff',
                fontFamily: 'Montserrat'
            },
            modalBody: {
                backgroundColor: '#2b2d3c',
                fontFamily: 'Montserrat',
                fontSize: '16px',
                color: '#ffffff'
            }
        };

        return (
            <div>
                <Modal closeModal={() => this.closeModal()}
                       customStyle={modalStyle}
                       shouldShowModal={this.state.isOpen}
                       title="New conversation">
                    {children}
                </Modal>
                <button onClick={() => this.openModal()}
                        className='new-conversation__button new-conversation__button--hovered' >
                        + New conversation
                </button>
            </div>
        );
    }

    private closeModal(): void {
        this.setState({isOpen: false});
    }

    private openModal(): void {
        this.setState({isOpen: true});
    }
}