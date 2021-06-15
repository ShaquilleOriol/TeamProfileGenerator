exports.makeCard = (obj) => {
  const partOne = `            <div class = "col-12 col-md-6 col-lg-4 col-xl-3 px-2">
                <div class = "card m-1 border-primary">
                    <div class = "card-header bg-primary">
                        <h4 class = "card-title text-light">${obj.getName()}</h4>
                        <h5 class = "card-subtitle text-light">${obj.getRole()}</h5>
                    </div>
                    <div class = "card-body p-0">
                        <ul class = "list-group list-group-flush">
                            <li class = "list-group-item">ID: <span>${obj.getId()}</span></li>
                            <li class = "list-group-item">Email: <a href = "mailto:${obj.getEmail()}">${obj.getEmail()}</a></li>\n`;

  if (obj.getRole() === "Engineer") {
    var partTwo = `                            <li class = "list-group-item">GitHub: <a href = "https://github.com/${obj.getGithub()}/" target = "_blank">${obj.getGithub()}</a></li>
                        </ul>
                    </div>
                </div>
            </div>\n`;
  } else if (obj.getRole() === "Manager") {
    var partTwo = `                            <li class = "list-group-item">Office Number: <span>${obj.getOfficeNum()}</span></li>
                        </ul>
                    </div>
                </div>
            </div>\n`;
  } else {
    var partTwo = `                            <li class = "list-group-item">School: <span>${obj.getSchool()}</span></li>
                        </ul>
                    </div>
                </div>
            </div>\n`;
  }

  return partOne + partTwo;
};
