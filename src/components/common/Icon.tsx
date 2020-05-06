import React from "react";
import {NavLink} from "react-router-dom";

export const Icon = () => {
    const icons = [{
        name: 'fa-bars',
        href: '/projects/'
    }, {
        name: 'fa-line-chart',
        href: '#'
    }, {
        name: 'fa-envelope',
        href: '/threads'
    }, {
        name: 'fa-users',
        href: '#'
    }];

    let renderIcon = icons.map((icon: any, n: number) => {
        return <span key={n} className="sidebar__item">
                        <NavLink key={n} to={icon.href}>
                            <i key={n}
                               className={`${icon.name} fa fa--color fa--hovered fa-2x`}
                               aria-hidden="true"> </i>
                        </NavLink>
                 </span>
    });

    return (
        <>{renderIcon}</>
    )
};

