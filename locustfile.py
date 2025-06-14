from locust import HttpUser, task, between

class APIPerformanceTest(HttpUser):
    wait_time = between(1, 3)
    host = "https://reqres.in"

    @task
    def check_api(self):
        self.client.get("/api/users?page=2")
