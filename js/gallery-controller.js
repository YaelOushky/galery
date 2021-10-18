'use strict'
var gPortfolioModal = 1

function renderModal(projId) {
    var proj = getProjById(projId)
    var strHTML = `
        <div class="portfolio-modal modal fade" id="portfolioModal" tabindex="-1" role="dialog" aria-hidden="true">
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
                  <li>Date: ${proj.publishedAt}</li>
                  <li>Client: Threads</li>
                  <li>Category: Illustration</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                  <i class="fa fa-times"></i>
                  Close Project</button>
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

    document.querySelector('.modal-container').innerHTML = strHTML
}

function renderPhotos() {
    var projs = getProjs()
    var strHTML = projs.map(proj => {
        return `
    
        <div class="col-md-4 col-sm-6 col-lg-4 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="renderModal('${proj.id}')">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/${proj.name}.jpg" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">Illustration</p>
          </div>
          </div>
        `
    })
    document.querySelector('.photos-container').innerHTML = strHTML.join('')
}
