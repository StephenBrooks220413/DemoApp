import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div className="container">
            <div className="floatR">
                <img src="https://document-export.canva.com/DADfAYpkId8/16/thumbnail/0001-6155757011.png" width="170px" height="130px"/>
            </div>
            <div className="jumbotron card-1">
                <div className="card-body card-1">
                    <h1 className="display-2 text-center">Welcome</h1>
                </div>
            </div>
            <div className="hero-img text-center">
            <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=693&q=80" height="330px" width="390px" />
            </div>

            <hr />

            <div className="container text-1">
                <div className="row">
                    <div className="col-md text-center">
                        Making codes a reality <br />
                        <small>Using asp.NEt core with MVC and React.js</small>
                    </div>
                    <div className="col-md text-center">
                        Making codes work<br />
                        <small>Using javascript libraries for interfaces</small>
                    </div>
                    <div className="col-md text-center">
                        Making codes alive<br />
                        <small>Using azure, netlify, github, postman, and SQL</small>
                    </div>
                </div>
            </div>

            <div className="jumbotron">
                <div className="card-body text-center">
                    <h1 className="display-4">Making Life Easy</h1>
                    <img src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/c176.0.784.784a/s851x315/67404165_2413504648706864_7019150895917039616_n.jpg?_nc_cat=106&_nc_sid=da31f3&_nc_ohc=Yt718BN0gvQAX9_Tfog&_nc_ht=scontent-dfw5-2.xx&oh=4ae192e4b06dc08ebd0fad0db8fb42ea&oe=5F068159" height="210px;" width="190" alt="dev pic"/>
                    <div className="card-footer">deving up the code fountains</div>
                </div>
            </div>

            <article>
                <div className="row">
                    <div className="col-md">
                        <div className="box-1">
                            <h1 className="text-center">Making Front Codes</h1>
                            <ul>
                                <li>html</li>
                                <li>css</li>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                                <li>Bootstrap</li>
                                <li>React</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="box-2">
                            <h1 className="text-center">Making Back Codes</h1>
                            <ul>
                                <li>PHP</li>
                                <li>JSON</li>
                                <li>C Sharp</li>
                                <li>asp.Net core</li>
                                <li>Azure Storages</li>
                                <li>SQL</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>

            <div className="profile text-center">
                <a href="https://www.youracclaim.com/badges/e9cc788b-1595-4941-9141-0d8fb3a24bc3/linked_in_profile">
                    <img src="https://images.youracclaim.com/size/680x680/images/9bc1696c-a565-4faf-8e06-3e24d62a00c5/MTA-Introduction-to-Programming-using-HTML-and-CSS-2019.png" width="80px" height="80px" />
                </a>
                <a href="https://www.youracclaim.com/users/stephenallenbrooks">
                    <img src="https://images.youracclaim.com/size/680x680/images/3664c66d-c6ef-49ae-8cb0-80d5868b2a44/blob.jpeg" width="80px" height="80px" />
                </a>
                <a href="https://www.youracclaim.com/badges/07383ef1-eb67-4677-ba8b-864c527b74fe/linked_in_profile">
                    <img src="https://images.youracclaim.com/size/680x680/images/0c84aca1-2775-45d0-a6d0-9995d0779b38/MTA-Introduction%2Bto%2BProgramming%2BUsing%2BJavaScript.png" width="80px" height="80px" />
                </a>
            </div>

            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md">
                            <h3>CompanyName</h3>
                            <address>
                                123 Any St - City, State <br />
                                PHONE: 555-555-5555
                            </address>
                        </div>
                        <div className="col-md">
                            <h3>Directory</h3>
                            <ul>
                                <li>
                                    <a href="https://www.developing4life.com" target="_blank" alt="profile link">Developer</a>
                                </li>
                                <li>
                                    <a href="mailto:someone@mail.com" target="_blank" alt="profile link">I.T. Director</a>
                                </li>
                                <li>
                                    <a href="mailto:someone@mail.com" target="_blank" alt="profile link">I.T. Manager</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md">
                            <h3>Articles in Code</h3>
                            <p>
                                Making headlines and new technologies for better user experience, <br />
                                making changes and meeting new challenges everyday.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
  }
}
