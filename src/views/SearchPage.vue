<template>
  <div class="container">
    <h1 class="title">Search Page</h1>
    <div class="container">
      <br/>
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-8">
          <form class="card card-sm">
            <div class="card-body row no-gutters align-items-center">
              <div class="col-auto">
                <i class="fas fa-search h4 text-body"></i>
              </div>
              <!--end of col-->
              <div class="col">
                <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords">
              </div>
              <!--end of col-->
              <div class="col-auto">
                <button class="btn btn-lg btn-success" type="submit">Search</button>
              </div>
              <!--end of col-->
            </div>
          </form>
        </div>
        <!--end of col-->
      </div>
    </div>
  </div>
</template>
<style>
  .form-control-borderless {
    border: none;
  }

  .form-control-borderless:hover, .form-control-borderless:active, .form-control-borderless:focus {
    border: none;
    outline: none;
    box-shadow: none;
  }
</style>
