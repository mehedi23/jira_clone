import React from 'react';
import NavLogo from '../../media/backgroundImg/jiraAuthLogo.png';
import DetailsPanel from '../../media/backgroundImg/DetailsPanel.svg';
import IssueActions from '../../media/backgroundImg/IssueActions.svg';
import IssueBreadcrumbs from '../../media/backgroundImg/IssueBreadcrumbs.svg';
import IssueContent from '../../media/backgroundImg/IssueContent.svg';
import Search from '../../media/backgroundImg/search.svg';
import SideBar from '../../media/backgroundImg/SideBar.svg';


const AuthPage = (props) => {
    return (
        <>
            <header>
                <img src={NavLogo} alt="img"/>
                <img src={Search} alt="img"/>
            </header>

            <div className='main-area'>
                <div className='sider-bar-area'>
                    <img width='240' src={SideBar} alt="img"/>
                </div>

                <div className='content-area'>
                    <div className='issueBreadcrumbs-action'>
                        <img src={IssueBreadcrumbs} alt="img"/>
                        <img src={IssueActions} alt="img"/>
                    </div>

                    <div className='issueContent-detailsPanel'>
                        <div className='issueContent'>
                            <img src={IssueContent} alt="img"/>
                        </div>

                        <div className='detailsPanel'>
                            <img src={DetailsPanel} alt="img"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='auth-modal-bg'></div>

            <div className='auth-modal-container'>
                <div className='auth-modal-area'>
                    {props.children}
                </div>
            </div>

        </>
    )
}

export default AuthPage