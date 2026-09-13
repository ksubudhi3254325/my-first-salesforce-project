<aura:application extends="force:slds">
    <!-- Wrap the layout inside an SLDS container for proper margins in the browser window -->
    <div class="slds-p-around_x-large" style="background-color: #f3f3f3; min-height: 100vh;">
        <div class="slds-size_1-of-1 slds-medium-size_1-of-2 slds-align_absolute-center">
            
            <!-- Call your validation component here -->
            <c:validationExample />
            
        </div>
    </div>
</aura:application>