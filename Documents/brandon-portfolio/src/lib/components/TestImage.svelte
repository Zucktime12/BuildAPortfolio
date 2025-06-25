<script lang="ts">
    import testImage from '$lib/assets/projects/westernedu.png';
    console.log('Test image imported:', testImage); // Debug
  </script>
  
  <div class="test-image">
    <h3>Test Image</h3>
    <img src={testImage} alt="Test Image" class="w-48 h-48 object-cover" />
  </div>