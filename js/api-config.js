/**
 * API 配置管理
 * 集中管理所有API端點，方便維護和更新
 */

const API_CONFIG = {
    // 基礎URL配置
    BASE_URLS: {
        PRODUCTION: "https://e5b0-59-127-165-153.ngrok-free.app",
        LOCAL: "http://localhost:8585"
    },
    
    // 自動選擇使用本地或生產環境URL
    // 如果本地服務可用，優先使用本地服務
    getBaseUrl: function() {
        // 檢測本地服務是否可用的邏輯可以在這裡實現
        // 簡單起見，這裡先直接返回一個URL
        // 實際應用中可以使用更複雜的邏輯來決定使用哪個URL
        return this.BASE_URLS.LOCAL;
    },
    
    // API端點
    ENDPOINTS: {
        // 訪客相關
        RESIDENTS: {
            ADD: "/api/residents/Add"
        },
        
        // 維修相關
        REPAIRS: {
            SUBMIT: "/api/repairs"
        }
    },
    
    // 獲取完整API URL
    getFullUrl: function(endpoint) {
        return this.getBaseUrl() + endpoint;
    },
    
    // 訪客相關API
    residents: {
        add: function() {
            return API_CONFIG.getFullUrl(API_CONFIG.ENDPOINTS.RESIDENTS.ADD);
        }
    },
    
    // 維修相關API
    repairs: {
        submit: function() {
            return API_CONFIG.getFullUrl(API_CONFIG.ENDPOINTS.REPAIRS.SUBMIT);
        }
    }
};
