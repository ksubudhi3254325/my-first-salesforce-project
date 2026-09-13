({
    cleanAndFormatQuery : function(rawText) {
        if (!rawText) {
            return "No search criteria provided.";
        }
        
        // Trim whitespace and convert text to uppercase
        var cleanedText = rawText.trim().toUpperCase();
        
        return "SEARCH_TERM: [" + cleanedText + "]";
    }
})