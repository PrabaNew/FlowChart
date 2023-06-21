import './App.css';
import building from './assets/building.svg';
import calender from './assets/Calendar.png';
import catagory from './assets/Category.png';
import notifiProfile from './assets/notification-profile.png';
import notifiStar from './assets/notification-star.png';
import notification from './assets/Notification.svg';
import userGrp from './assets//users-group.svg';
import tick from './assets/tick.png';
import search from './assets/Search.svg';
import filter from './assets/filter.svg';
import pluse from './assets/Vector.svg';
import CustomNodeFlow from './components/FlowChart';

function App() {
  return (
    <>
      <div className="main">
        <div className="sidebar">
          <aside>
            <div className="red-space">
              <div className="inner-color"></div>
            </div>
            <div className="inner-sidebar">
              <ul className="icons-list">
                <li>
                  <a href="##">
                    <img
                      src={catagory}
                      alt="##"
                    />
                  </a>
                </li>
                <li>
                  <a href="##">
                    <img
                      src={tick}
                      alt="##"
                    />
                  </a>
                </li>
                <li>
                  <a href="##">
                    <img
                      src={calender}
                      alt="##"
                    />
                  </a>
                </li>
                <li>
                  <a href="##">
                    <img
                      src={notifiStar}
                      alt="##"
                    />
                  </a>
                </li>
                <li>
                  <a href="##">
                    <img
                      src={userGrp}
                      alt="##"
                    />
                  </a>
                </li>
                <li>
                  <a href="##">
                    <img
                      src={building}
                      alt="##"
                    />
                  </a>
                </li>
              </ul>
              <ul className="notification-icons">
                <li>
                  <a href="##">
                    <img
                      src={notification}
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="##">
                    <img
                      src={notifiProfile}
                      alt=""
                      className="notifiProfile"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
        <div className="main-tree">
          <div className="d-flex justify-content-between header-section">
            <div className="header-people">
              <h1>People</h1>
              <a href="##">
                <img
                  src={pluse}
                  alt=""
                />
              </a>
            </div>
            <div className="input-grp">
              <div className="input-search">
                <input
                  type="search"
                  placeholder="Search"
                />
                <img
                  src={search}
                  alt="##"
                />
              </div>
              <div>
                <button className="filter-btn">
                  <img
                    src={filter}
                    alt=""
                  />
                  Filter
                </button>
              </div>
            </div>
          </div>
          <CustomNodeFlow />
        </div>
      </div>
    </>
  );
}

export default App;
