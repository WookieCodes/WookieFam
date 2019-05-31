import React from 'react';
import "./navbar.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import {NavLink as RoutingLink} from 'react-router-dom';

export default class TopMenu extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };

        //Binds
        this.CreateSiteLinks = this.CreateSiteLinks.bind(this);
        this.CreateDropdown = this.CreateDropdown.bind(this);
        this.setNavTheme = this.setNavTheme.bind(this);
    }

    CreateSiteLinks = () => {
        if(this.props.sites) {
            const navLinks = this.props.sites.map( (site) => {
                return(
                    <NavItem key={site.name}>
                        <RoutingLink className="site-link text-right nav-link" to={site.url}>{site.name}</RoutingLink>
                    </NavItem>
                )
            })
    
            return navLinks;
        }
    }

    CreateDropdown = () => {
        if (this.props.socials) {
            return(
            this.props.socials.length === 0 ? null : 
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle className="text-right" nav caret>Social Media</DropdownToggle>
                        <DropdownMenu right>
                            {this.CreateDropdownItems()}
                        </DropdownMenu>
                    </UncontrolledDropdown> 
            );
        }
    }

    CreateDropdownItems = () => {
 
            const socials = this.props.socials.map( (site) => {
                return (
                    <DropdownItem className="text-right" key={site.name}>
                        <NavLink className="site-link" href={site.url} target="_blank">{site.name}</NavLink>
                    </DropdownItem>
                )
            })
    
            return socials;
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    setNavTheme = () => {
        if (this.props.theme === "light") {
            return " navbar-light"
        } else {
            return " navbar-dark"
        }
    }

    render() {
        return (
            <div>
                <Navbar className={"border-bottom" + this.setNavTheme()} expand="md">
                    <NavbarBrand href="/">{this.props.brand}</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {this.CreateSiteLinks()}
                            {this.CreateDropdown()}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}