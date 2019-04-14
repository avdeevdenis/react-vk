import React from 'react';

import { Link } from 'react-router-dom';

import tools from '../../tools/index'
import home from './images/home.svg'

import './index.scss'

export default class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);

        this.onLogoutClick = this.onLogoutClick.bind(this);
    }

    onLogoutClick() {
        fetch('/api/logout')
            .then(r => r.json())
            .then(data => this.onFetchResponse.call(this, data))
    }

    onFetchResponse(data) {
        if (data.success) {
            if (!tools.getCookie('uid')) {
                this.props.logoutUser();
            }
        }
    }

    render() {
        return (
            <div className='header'>
                <div className='header__logo'>
                    <img width='20' height='20' className='header__logo-icon' src={home} alt=''/>
                    Hello, <span className='header__login'>{tools.firstUpper(this.props.login)}</span>
                </div>
                <div className='header__logout'>
                    <Link to='' onClick={this.onLogoutClick}>
                        Выйти
                    </Link>
                </div>
            </div>
		);
    }
};
