<div class="page-header">
    <h3>EspoCRM - Open Source CRM application</h3>
    <h5>Version {{version}}</h5>
</div>


<form id="spam" onsubmit="return false;">
    <div class="form-group">
        <label for="field-email">{{translate 'Email'}}</label>
        <input type="email" name="email" id="field-email" class="form-control">
    </div>
    <div>
        <button type="submit" class="btn btn-primary" id="btn-login">{{translate 'Send' scope='Spam'}}</button>
    </div>
</form>
