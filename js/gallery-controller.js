'use strict'
var gPortfolioModal = 1

function renderProjs() {
    var projs = gProjs
    var strHTML = projs.map(proj => {
        return `
        <div class="portfolio-modal modal fade" id="portfolioModal${gPortfolioModal++}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
      <div class="modal-content">
      <div class="close-modal" data-dismiss="modal">
      <div class="lr">
            <div class="rl"></div>
          </div>
          </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>${proj.name}</h2>
                <p class="item-intro text-muted">${proj.title}</p>
                <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.name}.jpg" alt="">
                <p>${proj.desc}!</p>
                <ul class="list-inline">
                  <li>Date: January 2017</li>
                  <li>Client: Threads</li>
                  <li>Category: Illustration</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                  <i class="fa fa-times"></i>
                  Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      `
    })
    console.log(strHTML);
    document.querySelector('.modal-container').innerHTML = strHTML
}