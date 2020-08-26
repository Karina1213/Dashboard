import React from "react";
import {NavLink} from "react-router-dom";

export const IconHeader = () => {
    const icons = [{
        name: 'fa-search fa-lg',
        href: '#'
    }, {
        name: 'fa-bell',
        href: '#'
    }, {
        name: 'fa-user fa-3x',
        href: '#'
    }, {
        name: 'fa-angle-down',
        href: '#'
    }, {
        name: 'fa-sign-out fa-2x',
        href: '#'
    }];

    let renderIcon = icons.map((icon: any, n: number) => {
        return <span key={n} className="nav-bar__item">
                    <NavLink key={n} to={icon.href}>
                        <i className={`${icon.name} fa fa--hovered`}
                           aria-hidden="true"> </i>
                    </NavLink>
                </span>
    });

    return (
        <>{renderIcon}</>
    )
}