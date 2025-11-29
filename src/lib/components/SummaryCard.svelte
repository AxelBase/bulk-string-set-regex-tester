<script lang="ts">
  export let total: number = 0;
  export let matched: number = 0;
  export let error: string | null = null;
</script>

<div class="card border-primary mb-4">
  <div class="card-body">
    <h5 class="card-title mb-3">Results Summary</h5>
    {#if error}
      <div class="alert alert-danger py-2 mb-3" role="alert">
        Regex Error: {error}
      </div>
    {:else}
      <div class="row text-center g-3">
        <div class="col-4">
          <div class="fs-1 fw-bold text-primary">{total}</div>
          <small class="text-muted">Total Lines</small>
        </div>
        <div class="col-4">
          <div class="fs-1 fw-bold text-success">{matched}</div>
          <small class="text-muted">Matched</small>
        </div>
        <div class="col-4">
          <div class="fs-1 fw-bold text-danger">{total - matched}</div>
          <small class="text-muted">Not Matched</small>
        </div>
      </div>
    {/if}
  </div>
</div>